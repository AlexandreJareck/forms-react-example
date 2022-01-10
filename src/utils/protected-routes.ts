import { GetServerSidePropsContext, NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  const req = context.req as NextApiRequest
  if (session) session.jwt = req?.cookies['next-auth.session-token']
  if (!session) {
    context.res.setHeader(
      'Location',
      `/sign-in?callbackUrl=${context.resolvedUrl}`
    )
    context.res.statusCode = 302
  }

  return session
}

export default protectedRoutes
