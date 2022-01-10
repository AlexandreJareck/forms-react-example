import { GetServerSidePropsContext, NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  const req = context.req as NextApiRequest
  const token = await getToken({
    req,
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw'
  })
  if (session) session.jwt = token?.accessToken
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
