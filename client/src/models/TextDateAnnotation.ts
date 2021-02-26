/* tslint:disable */
/* eslint-disable */
/**
 * NLP Sandbox PHI Deidentifier API
 * # Introduction This NLP tool takes as input a clinical note and returned a de-identified version of the note. This design of this API is a work in progress. # Examples - [NLP Sandbox PHI Deidentifier](https://github.com/nlpsandbox/phi-deidentifier) 
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TextAnnotation,
    TextAnnotationFromJSON,
    TextAnnotationFromJSONTyped,
    TextAnnotationToJSON,
    TextDateAnnotationAllOf,
    TextDateAnnotationAllOfFromJSON,
    TextDateAnnotationAllOfFromJSONTyped,
    TextDateAnnotationAllOfToJSON,
} from './';

/**
 * A date annotation in a text
 * @export
 * @interface TextDateAnnotation
 */
export interface TextDateAnnotation {
    /**
     * The position of the first character
     * @type {number}
     * @memberof TextDateAnnotation
     */
    start: number;
    /**
     * The length of the annotation
     * @type {number}
     * @memberof TextDateAnnotation
     */
    length: number;
    /**
     * The string annotated
     * @type {string}
     * @memberof TextDateAnnotation
     */
    text: string;
    /**
     * The confidence in the accuracy of the annotation
     * @type {number}
     * @memberof TextDateAnnotation
     */
    confidence: number;
    /**
     * Date format (ISO 8601)
     * @type {string}
     * @memberof TextDateAnnotation
     */
    dateFormat?: string;
}

export function TextDateAnnotationFromJSON(json: any): TextDateAnnotation {
    return TextDateAnnotationFromJSONTyped(json, false);
}

export function TextDateAnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextDateAnnotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': json['start'],
        'length': json['length'],
        'text': json['text'],
        'confidence': json['confidence'],
        'dateFormat': !exists(json, 'dateFormat') ? undefined : json['dateFormat'],
    };
}

export function TextDateAnnotationToJSON(value?: TextDateAnnotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': value.start,
        'length': value.length,
        'text': value.text,
        'confidence': value.confidence,
        'dateFormat': value.dateFormat,
    };
}


