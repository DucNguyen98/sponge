import { HttpProxy } from "../types/http-proxy.class"
import { InputTarget } from "../types/input-target.class"

export class ScrapeCommandDto {
  url: string
  targets?: InputTarget[] = []
  csr?: boolean = false
  headers?: Record<string, string>
  httpProxy?: HttpProxy
}
