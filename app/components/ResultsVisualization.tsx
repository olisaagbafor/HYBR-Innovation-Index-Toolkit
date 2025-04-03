import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ResultsVisualizationProps {
    scores: {
        [key: string]: number;
    };
}

const ResultsVisualization = ({ scores }: ResultsVisualizationProps) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);
    const averageScore = (Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length);

    const getScoreCategory = (score: number) => {
        if (score >= 4.5) return { text: 'Excellence', color: 'text-green-600' };
        if (score >= 3.5) return { text: 'Strong', color: 'text-blue-600' };
        if (score >= 2.5) return { text: 'Moderate', color: 'text-yellow-600' };
        return { text: 'Needs Improvement', color: 'text-red-600' };
    };

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        const labels = [
            'Problem Solving',
            'Creativity',
            'Resources',
            'Collaboration',
            'Implementation',
            'Learning',
            'Customer Focus',
            'Adaptability'
        ];

        const data = labels.map(label =>
            scores[label.toLowerCase().replace(/\s+/g, '')] || 0
        );

        chartInstance.current = new Chart(ctx, {
            type: 'radar',
            data: {
                labels,
                datasets: [{
                    label: 'Innovation Score',
                    data,
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        min: 0,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                            font: {
                                size: 12
                            }
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                weight: 500
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                elements: {
                    line: {
                        tension: 0.4
                    }
                }
            }
        });
    }, [scores]);

    const scoreCategory = getScoreCategory(averageScore);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Innovation Assessment Results
                    </h2>
                    <p className="text-gray-600">
                        Your organization's innovation capability analysis
                    </p>
                </div>

                <div className="mb-8">
                    <canvas ref={chartRef} className="max-w-2xl mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Overall Innovation Score
                        </h3>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-blue-600">
                                {averageScore.toFixed(2)}
                            </span>
                            <span className="text-gray-600 mb-1">/5.00</span>
                        </div>
                        <p className={`mt-2 font-medium ${scoreCategory.color}`}>
                            {scoreCategory.text}
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Key Insights
                        </h3>
                        <ul className="space-y-2">
                            {Object.entries(scores)
                                .sort(([, a], [, b]) => b - a)
                                .slice(0, 2)
                                .map(([key, score]) => (
                                    <li key={key} className="text-green-600">
                                        ✓ Strong {key.replace(/([A-Z])/g, ' $1').toLowerCase()} ({score}/5)
                                    </li>
                                ))}
                            {Object.entries(scores)
                                .sort(([, a], [, b]) => a - b)
                                .slice(0, 1)
                                .map(([key, score]) => (
                                    <li key={key} className="text-red-600">
                                        ⚠ Improve {key.replace(/([A-Z])/g, ' $1').toLowerCase()} ({score}/5)
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsVisualization; 