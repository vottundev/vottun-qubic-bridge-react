import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'Shadcn/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'secondary',
                'destructive',
                'ghost',
                'link',
                'outline',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'icon', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

//color
export const Default: Story = {
    args: {
        variant: 'default',
        children: 'Confirm',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Confirm',
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Confirm',
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Confirm',
    },
}

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Confirm',
    },
}
export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Confirm',
    },
}

//size

export const SizeDefault: Story = {
    args: {
        size: 'default',
        children: 'Confirm',
    },
}
export const SizeIcon: Story = {
    args: {
        size: 'icon',
        children: 'icon',
    },
}
export const SizeLarge: Story = {
    args: {
        size: 'lg',
        children: 'Confirm',
    },
}

export const SizeSmall: Story = {
    args: {
        size: 'sm',
        children: 'Confirm',
    },
}