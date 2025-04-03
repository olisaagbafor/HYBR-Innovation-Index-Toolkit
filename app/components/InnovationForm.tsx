import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    [key: string]: number;
}

const questions = [
    {
        id: 'problemSolving',
        text: 'How effectively does your organization identify and solve complex problems?',
        description: 'Consider your organization\'s approach to problem identification and resolution processes.'
    },
    {
        id: 'creativity',
        text: 'To what extent does your organization encourage and support creative thinking?',
        description: 'Evaluate the environment and support for new ideas and creative solutions.'
    },
    {
        id: 'resources',
        text: 'How well does your organization allocate resources for innovation initiatives?',
        description: 'Consider both financial and human resources dedicated to innovation.'
    },
    {
        id: 'collaboration',
        text: 'How effectively do teams collaborate and share knowledge across the organization?',
        description: 'Assess cross-functional teamwork and knowledge sharing practices.'
    },
    {
        id: 'implementation',
        text: 'How successfully does your organization implement new ideas and solutions?',
        description: 'Evaluate the process of turning ideas into practical solutions.'
    },
    {
        id: 'learning',
        text: 'How well does your organization learn from both successes and failures?',
        description: 'Consider feedback loops and continuous improvement practices.'
    },
    {
        id: 'customerFocus',
        text: 'How effectively does your organization incorporate customer feedback into innovation?',
        description: 'Assess customer input integration in the innovation process.'
    },
    {
        id: 'adaptability',
        text: 'How quickly can your organization adapt to changing market conditions?',
        description: 'Evaluate organizational agility and response to market changes.'
    }
];

const InnovationForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<FormData>();
    const [hoveredQuestion, setHoveredQuestion] = useState<string | null>(null);
    const values = watch();
    const progress = Object.keys(values).length;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">Progress</span>
                        <span className="text-sm text-blue-600">{progress}/8 questions answered</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${(progress / 8) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-8">
                    {questions.map((question) => (
                        <div
                            key={question.id}
                            className={`bg-white rounded-xl shadow-sm border-2 transition-all duration-200 ease-in-out
                                ${hoveredQuestion === question.id ? 'border-blue-400 shadow-md' : 'border-transparent'}
                                ${values[question.id] ? 'bg-blue-50/50' : 'bg-white'}
                            `}
                            onMouseEnter={() => setHoveredQuestion(question.id)}
                            onMouseLeave={() => setHoveredQuestion(null)}
                        >
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {question.text}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {question.description}
                                    </p>
                                </div>
                                <div className="relative">
                                    <select
                                        {...register(question.id, { required: true })}
                                        className={`w-full px-4 py-3 text-black rounded-lg border ${errors[question.id]
                                            ? 'border-red-300 bg-red-50'
                                            : 'border-gray-300 bg-white'
                                            } focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200`}
                                    >
                                        <option value="">Select a rating...</option>
                                        <option value="1">1 - Very Poorly</option>
                                        <option value="2">2 - Poorly</option>
                                        <option value="3">3 - Adequately</option>
                                        <option value="4">4 - Well</option>
                                        <option value="5">5 - Excellently Well</option>
                                    </select>
                                    {errors[question.id] && (
                                        <p className="mt-2 text-sm text-red-600">
                                            Please select a rating
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sticky bottom-0 bg-white/80 backdrop-blur-sm p-6 rounded-t-xl shadow-lg mt-8">
                    <div className="max-w-4xl mx-auto flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                            {8 - progress} questions remaining
                        </div>
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200
                                ${isValid
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Calculate Innovation Score
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InnovationForm; 