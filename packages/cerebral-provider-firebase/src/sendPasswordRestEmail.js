import firebase from 'firebase'

export default function sendPasswordResetEmail (email) {
  return firebase.auth().sendPasswordResetEmail(email)
    .then(() => {})
    .catch((error) => {
      return {
        error: {
          code: error.code,
          message: error.message
        }
      }
    })
}
