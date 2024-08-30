import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'
import Section from './Section'

const CoreConcepts = () => {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map(({ title, image, description }) => (
                    <CoreConcept
                        key={title}
                        title={title}
                        description={description}
                        image={image}
                    />
                ))}
            </ul>
        </Section>
    )
}

export default CoreConcepts
