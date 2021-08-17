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
/**
 * Configuration for the masking char strategy. E.g. "John Smith lives at 123 Main St" -> "********* lives at ***********".
 * @export
 * @interface MaskingCharConfig
 */
export interface MaskingCharConfig {
    /**
     * Character used to mask sensitive information
     * @type {string}
     * @memberof MaskingCharConfig
     */
    maskingChar?: string;
}

export function MaskingCharConfigFromJSON(json: any): MaskingCharConfig {
    return MaskingCharConfigFromJSONTyped(json, false);
}

export function MaskingCharConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaskingCharConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maskingChar': !exists(json, 'maskingChar') ? undefined : json['maskingChar'],
    };
}

export function MaskingCharConfigToJSON(value?: MaskingCharConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maskingChar': value.maskingChar,
    };
}


