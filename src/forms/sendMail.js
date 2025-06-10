
import axios from 'axios';

// -------------------------------------------------------------------------------------
export function sendEmail (emailAddress, message, subject) {

    return new Promise((resolve, reject) => {

      if (emailAddress == null) {
        reject(`Error: sendMail emailAddress can not be NULL.`)
        return
      }

      let request = {
          //            url: `http://${location.hostname}:${location.port}/api/mail`,
          url: `./api/mail`,
          method: 'post',
          data: {
              subject: subject,
              addresses: emailAddress,
              message: message
          }
      }

      axios(request)  // Send the email
            .then (results => {
                if (results.data === 'ok') {
                    resolve(results)
                } else {
                    reject(`Error: sendMail to ${emailAddress} -- not OK.`)
                }
            })
            .catch (error => {
                console.log ('The following sendMail error occurred', error)
                reject(error)
            })

      })
}

