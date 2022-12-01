import { Button, Card, Container, Input, Spacer, Text } from "@nextui-org/react"

export default function Home() {
  return (
    <Container
      display="flex"
      justify="center"
      alignContent="center"
      css={{
        height: "100vh"
      }}
    >
      <Card 
        variant="bordered"
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mw: "300px"
        }}
        >
        <Card.Header
          css={{
            justifyContent: "center",
          }}
        >
          <Text h2>Login</Text>
        </Card.Header>
        <Card.Divider/>
        <Card.Body>
          <Input
            clearable
            label="Email"

          />
          <Spacer y={1.5}/>
          <Input
          label="Password"
          />
        </Card.Body>
        <Card.Footer
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
          flat
          >Login</Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}
