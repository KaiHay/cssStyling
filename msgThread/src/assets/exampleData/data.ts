import { Message, Thread } from '../../App'
//example data
const exampleMessage1: Message = {
    content: 'hello',
    person: 'kai',
    me: true
}
const exampleMessage2: Message = {
    content: 'hello?',
    person: 'kai',
    me: true
}
const exampleMessage3: Message = {
    content: 'whats up? I was wondering how much text i can put in the message and have the messages extend the length',
    person: 'bob',
    me: false
}
export const exampleThread: Thread = {
    messages: [exampleMessage1, exampleMessage2, exampleMessage3]
}