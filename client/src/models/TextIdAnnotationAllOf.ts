/* tslint:disable */
/* eslint-disable */
/**
 * NLP Sandbox PHI Deidentifier API
 * # Introduction This NLP tool takes as input a clinical note and returned a de-identified version of the note. This design of this API is a work in progress. # Examples - [NLP Sandbox PHI Deidentifier Example](https://github.com/nlpsandbox/phi-deidentifier-example) 
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: team@nlpsandbox.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TextIdAnnotationAllOf
 */
export interface TextIdAnnotationAllOf {
    /**
     * Type of ID information
     * @type {string}
     * @memberof TextIdAnnotationAllOf
     */
    idType: TextIdAnnotationAllOfIdTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum TextIdAnnotationAllOfIdTypeEnum {
    Account = 'account',
    BioId = 'bio_id',
    Device = 'device',
    HealthPlan = 'health_plan',
    IdNumber = 'id_number',
    License = 'license',
    MedicalRecord = 'medical_record',
    Ssn = 'ssn',
    Vehicle = 'vehicle',
    Other = 'other'
}

export function TextIdAnnotationAllOfFromJSON(json: any): TextIdAnnotationAllOf {
    return TextIdAnnotationAllOfFromJSONTyped(json, false);
}

export function TextIdAnnotationAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextIdAnnotationAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'idType': json['idType'],
    };
}

export function TextIdAnnotationAllOfToJSON(value?: TextIdAnnotationAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'idType': value.idType,
    };
}

