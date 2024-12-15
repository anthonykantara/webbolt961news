export const DISTRIBUTION_CHANNELS = {
  left: [
    {
      id: 'website',
      label: 'Website',
      iconType: 'Monitor',
      iconColor: '#8A8A8E'
    },
    {
      id: 'bilingual',
      label: 'Bilingual',
      iconType: 'WhatsApp',
      iconColor: '#25D366'
    },
    {
      id: 'arabic',
      label: 'Arabic',
      iconType: 'Facebook',
      iconColor: '#1877F2'
    },
    {
      id: 'x',
      label: 'X',
      iconType: 'Twitter',
      iconColor: '#000000'
    }
  ],
  right: [
    {
      id: 'app',
      label: 'App',
      iconType: 'Smartphone',
      iconColor: '#8A8A8E'
    },
    {
      id: 'english-whatsapp',
      label: 'English',
      iconType: 'WhatsApp',
      iconColor: '#25D366'
    },
    {
      id: 'english-facebook',
      label: 'English',
      iconType: 'Facebook',
      iconColor: '#1877F2'
    },
    {
      id: 'telegram',
      label: 'Telegram',
      iconType: 'Send',
      iconColor: '#229ED9'
    }
  ]
} as const;