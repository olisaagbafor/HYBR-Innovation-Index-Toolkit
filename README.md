# Innovation Index Toolkit

A web-based assessment tool that helps organizations evaluate and visualize their innovation capabilities through an interactive questionnaire and detailed analytics.

## 🌟 Features

- **Interactive Assessment Form**: Eight carefully crafted questions covering key innovation dimensions
- **Real-time Scoring**: Instant calculation of innovation scores as users complete the assessment
- **Visual Analytics**: Dynamic radar chart visualization of results across different innovation dimensions
- **Detailed Insights**: Automated analysis of strengths and areas for improvement
- **Responsive Design**: Seamless experience across desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [git@github.com:olisaagbafor/HYBR-Innovation-Index-Toolkit.git](git@github.com:olisaagbafor/HYBR-Innovation-Index-Toolkit.git)
cd innovation-index-toolkit
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Technical Architecture

### Frontend Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js
- **Form Management**: React Hook Form

### Key Components

1. **InnovationForm (`app/components/InnovationForm.tsx`)**

   - Handles user input collection
   - Implements form validation
   - Manages assessment progress
   - Provides real-time feedback

2. **ResultsVisualization (`app/components/ResultsVisualization.tsx`)**

   - Generates radar chart visualization
   - Calculates overall scores
   - Provides detailed insights
   - Displays strengths and improvement areas

3. **Main Page (`app/page.tsx`)**
   - Manages application state
   - Handles component transitions
   - Provides overall layout structure

### Scoring System

The assessment uses a 5-point Likert scale:

1. Very Poorly/Not Likely
2. Poorly
3. Adequately
4. Well
5. Excellently Well/Always

Overall scoring categories:

- 4.5 - 5.0: Excellence
- 3.5 - 4.4: Strong
- 2.5 - 3.4: Moderate
- 1.0 - 2.4: Needs Improvement

## 📦 Deployment

### Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:

```bash
npm install -g vercel
```

3. Deploy the application:

```bash
vercel
```

### Alternative Deployment Options

The application can also be deployed to other platforms that support Next.js:

- AWS Amplify
- Netlify
- Digital Ocean App Platform

## 🛠️ Development

### Code Structure

```
innovation-index-toolkit/
├── app/
│   ├── components/
│   │   ├── InnovationForm.tsx
│   │   └── ResultsVisualization.tsx
│   ├── page.tsx
│   └── layout.tsx
├── public/
└── package.json
```

### Adding New Questions

To add new questions, modify the `questions` array in `InnovationForm.tsx`:

```typescript
const questions = [
  {
    id: "uniqueId",
    text: "Question text",
    description: "Detailed description",
  },
  // ...
];
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
