// src/components/Card.tsx
import React from 'react'
import { Card as ShadcnCard, CardHeader, CardDescription } from './ui/card'

interface CardProps {
  imageSrc: string
  title: string
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <ShadcnCard className="">
      <CardHeader className="w-full h-48 overflow-hidden flex items-center justify-center">
        <img src={imageSrc} alt={title} className="h-full" />
      </CardHeader>
      <CardDescription className="p-2">
        <h2 className="text-md font-">{title}</h2>
      </CardDescription>
    </ShadcnCard>
  )
}

export default Card
