import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";

const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req){
        const { email, password } = credentials
      }
    })
  ]
}

export default NextAuth(authOptions)