import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/policy')({
  component: () => <div>Hello /policy!</div>
})