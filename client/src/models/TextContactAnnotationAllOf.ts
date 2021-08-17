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
 * 
 * @export
 * @interface TextContactAnnotationAllOf
 */
export interface TextContactAnnotationAllOf {
    /**
     * Type of contact information
     * @type {string}
     * @memberof TextContactAnnotationAllOf
     */
    contactType: TextContactAnnotationAllOfContactTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum TextContactAnnotationAllOfContactTypeEnum {
    Email = 'email',
    Fax = 'fax',
    IpAddress = 'ip_address',
    Phone = 'phone',
    Url = 'url',
    Other = 'other'
}

export function TextContactAnnotationAllOfFromJSON(json: any): TextContactAnnotationAllOf {
    return TextContactAnnotationAllOfFromJSONTyped(json, false);
}

export function TextContactAnnotationAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextContactAnnotationAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactType': json['contactType'],
    };
}

export function TextContactAnnotationAllOfToJSON(value?: TextContactAnnotationAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contactType': value.contactType,
    };
}


