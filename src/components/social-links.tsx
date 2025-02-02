import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import type { SocialLinks } from "../types/team"

interface SocialLinksProps {
  socials?: SocialLinks;
}

export default function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="flex gap-2 mt-2">
      {socials?.linkedin && (
        <a
          href={socials?.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {socials?.instagram && (
        <a
          href={socials?.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
          aria-label="Instagram Profile"
        >
          <Instagram className="w-5 h-5" />
        </a>
      )}
    </div>
  )
}
