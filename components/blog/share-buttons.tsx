"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`,
      color: "bg-[#3b5998] hover:bg-[#3b5998]/90",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "bg-[#0077b5] hover:bg-[#0077b5]/90",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      color: "bg-gray-600 hover:bg-gray-700",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-medium text-gray-500">Compartilhar</h3>
      <div className="flex space-x-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} text-white p-2 rounded-full transition-colors`}
            aria-label={`Compartilhar no ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className={`${
            copied ? "bg-green-600" : "bg-gray-800 hover:bg-gray-900"
          } text-white p-2 rounded-full transition-colors`}
          aria-label="Copiar link"
        >
          <LinkIcon className="h-5 w-5" />
        </button>
      </div>
      {copied && <span className="text-xs text-green-600">Link copiado!</span>}
    </div>
  )
}
