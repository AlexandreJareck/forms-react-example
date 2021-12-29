import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type AuthorizeProps = {
  email: string
  password: string
}

const options: NextAuthOptions = {
  pages: {
    signIn: '/sign-in'
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
        console.log(data)
        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = user

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.name = user.name
      }
      return token
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => {
  NextAuth(req, res, options)
}

export default Auth
