import { PropTable } from "@/components/mdx/prop-table"
import { Container } from "@agniflow-ui/react"

export default function Page() {
  return (
    <Container py="20" fontSize="sm">
      <p>Props</p>
      <PropTable component="badge" />
    </Container>
  )
}
