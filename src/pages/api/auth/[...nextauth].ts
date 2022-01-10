import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
  },
  jwt: {
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw'
  },
  providers: [
    Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize({ email, password }: any) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()
        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (user) {
        session.user = user
        session.accessToken = token.jwt
      }

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
        token.accessToken = user.jwt
      }
      return token
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => {
  NextAuth(req, res, options)
}

export default Auth
