function createAction(type, prepareAction?)

import { createAction } from '@reduxjs/toolkit'

const sendmessage = createAction('SEND_MESSAGE')

let action = sendmessage()
// { type: 'SEND_MESSAGE' }

action = sendmessage({
    content: 'This is a message for the chatbox, cool!',
    timestamp: new Date(),
    userId: '192928101',
    chatroomId: '8w8292910'
  })
// returns { type: 'SEND_MESSAGE', payload: {
//     content: 'This is a message for the chatbox, cool!',
//     timestamp: new Date(),
//     userId: '192928101',
//     chatroomId: '8w8292910'
//   } }

console.log(sendmessage.toString())
// 'SEND_MESSAGE'

console.log(`The action type is: ${sendmessage}`)
// 'The action type is: SEND_MESSAGE'