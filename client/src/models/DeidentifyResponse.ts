/* tslint:disable */
/* eslint-disable */
/**
 * NLP Sandbox PHI Deidentifier API
 * # Introduction This NLP tool takes as input a clinical note and returned a de-identified version of the note. This design of this API is a work in progress. # Examples - [NLP Sandbox PHI Deidentifier](https://github.com/nlpsandbox/phi-deidentifier) 
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: team@nlpsandbox.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AnnotationSet,
    AnnotationSetFromJSON,
    AnnotationSetFromJSONTyped,
    AnnotationSetToJSON,
    Note,
    NoteFromJSON,
    NoteFromJSONTyped,
    NoteToJSON,
} from './';

/**
 * The response to a deidentification request
 * @export
 * @interface DeidentifyResponse
 */
export interface DeidentifyResponse {
    /**
     * 
     * @type {AnnotationSet}
     * @memberof DeidentifyResponse
     */
    originalAnnotations?: AnnotationSet;
    /**
     * 
     * @type {AnnotationSet}
     * @memberof DeidentifyResponse
     */
    deidentifiedAnnotations?: AnnotationSet;
    /**
     * 
     * @type {Note}
     * @memberof DeidentifyResponse
     */
    deidentifiedNote?: Note;
}

export function DeidentifyResponseFromJSON(json: any): DeidentifyResponse {
    return DeidentifyResponseFromJSONTyped(json, false);
}

export function DeidentifyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeidentifyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'originalAnnotations': !exists(json, 'originalAnnotations') ? undefined : AnnotationSetFromJSON(json['originalAnnotations']),
        'deidentifiedAnnotations': !exists(json, 'deidentifiedAnnotations') ? undefined : AnnotationSetFromJSON(json['deidentifiedAnnotations']),
        'deidentifiedNote': !exists(json, 'deidentifiedNote') ? undefined : NoteFromJSON(json['deidentifiedNote']),
    };
}

export function DeidentifyResponseToJSON(value?: DeidentifyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'originalAnnotations': AnnotationSetToJSON(value.originalAnnotations),
        'deidentifiedAnnotations': AnnotationSetToJSON(value.deidentifiedAnnotations),
        'deidentifiedNote': NoteToJSON(value.deidentifiedNote),
    };
}


