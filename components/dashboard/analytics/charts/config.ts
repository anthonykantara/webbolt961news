export const chartConfig = {
  colors: {
    primary: 'hsl(var(--chart-1))',
    secondary: 'hsl(var(--chart-2))',
    tertiary: 'hsl(var(--chart-3))',
    quaternary: 'hsl(var(--chart-4))',
    quinary: 'hsl(var(--chart-5))'
  },
  axis: {
    style: {
      fontSize: 12,
      tickMargin: 8
    },
    props: {
      stroke: '#E5E7EB',
      padding: { left: 10, right: 10, top: 10, bottom: 10 }
    }
  },
  grid: {
    strokeDasharray: '3 3',
    stroke: '#E5E7EB'
  }
} as const;