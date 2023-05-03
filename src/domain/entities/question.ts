import { randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"

interface QuestionProps {
  title: string 
  content: string 
  slug: Slug
  authorId: string
}

export class Question {
  public title: string
  public slug: Slug
  public content: string
  public authorId: string
  public id: string

  constructor(props: QuestionProps, id?: string){
    this.title = props.title
    this.slug = props.slug
    this.content = props.content
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}