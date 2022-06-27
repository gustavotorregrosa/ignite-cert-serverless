import { APIGatewayProxyHandler } from 'aws-lambda'
import { randomUUID } from 'crypto'

interface ICreateTodo {
    title: string, 
    deadline: string    

}

export const handler: APIGatewayProxyHandler = async (event) => {

    const  { userid } = event.headers
    let { title, deadline} = JSON.parse(event.body as string) as ICreateTodo

    return {
        statusCode: 201,
        body: JSON.stringify({
            id: randomUUID(),
            user_id: userid,
            title,
            deadline: new Date(deadline)
        })
    }
}