import { IncomingMessage } from 'http'

declare function parseFormData(req: IncomingMessage, info?: { limit?: string | number }): Promise<any>

export = parseFormData
