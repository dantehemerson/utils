import { ObjectID } from 'mongodb';
declare function objectIDsEqual(a: any, b: any): boolean;
declare function asObjectID(id: any): ObjectID;
declare function asObjectIDs(ids: any[]): ObjectID[];
declare function getDateFromObjectId(id: any): Date;
declare function getTimestampFromObjectId(id: any): number;
declare function getNewObjectIdString(): string;
/**
 * Checks to see whether something is either a String or ObjectID (hence ObjectID-like)
 */
declare function isLikeObjectId(value: any): boolean;
declare function serializeObjectId(id: any): string;
declare function serializeObjectIds(ids: any): string[];
declare function createIdForTimestampString(timestamp: any): string;
declare function createIdForTimestamp(timestamp: any): ObjectID;
declare function createTestIdForTimestampString(timestamp: any): string;
declare function fieldInPredicate(fieldName: any, values: any, additionalClauses: any): any;
declare function setId(model: any): any;
declare function setIds(array: any): any;
/**
 * Given a set of conjunctions, attempts to return a mongo-efficient form of
 * the query.
 *
 * So imagine you want to query for a set of user rooms, like
 * userId: X1, roomId: Y1
 * userId: X2, roomId: Y2
 * userId: X3, roomId: Y3
 *
 * The default query would be
 * `{ $or: [{ userId: X1, roomId: Y1 }, { userId: X2, roomId: Y2 }, etc ]}`
 *
 * Unfortunately, mongo will attempt to handle this conjunction by issuing
 * `n` parallel queries, which is very inefficient, especially if the
 * one of the terms in all the queries is common
 *
 * This method will attempt to group the terms either by the first term
 * or the second, if it's possible to do so.
 *
 * For example, if all the roomId terms are equal, it is much faster to ask
 * mongo for `{ roomId: Y1, userId: { $in: { X1, X2, X3} } }`
 *
 * A similar transform is possible if all the userIds are equal.
 *
 * While it's possible to break the query into more sets, there is a cpu cost
 * associated with doing this, so only the trivial case is attempted.
 *
 */
declare function conjunctionIds(terms: any, termIdentifiers: any): any;
declare function isMongoError(err: any): boolean;
declare function mongoErrorWithCode(code: any): (err: any) => boolean;
/**
 * Given an array of an array of models, return a
 * unique list of models
 */
declare function unionModelsById(arrayOfModels: any): any;
export { objectIDsEqual, isMongoError, setId, setIds, isLikeObjectId, asObjectID, asObjectIDs, getDateFromObjectId, getTimestampFromObjectId, getNewObjectIdString, serializeObjectId, serializeObjectIds, createIdForTimestamp, createIdForTimestampString, createTestIdForTimestampString, fieldInPredicate, conjunctionIds, mongoErrorWithCode, unionModelsById };
