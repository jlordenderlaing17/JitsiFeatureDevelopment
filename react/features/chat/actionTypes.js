// @flow

/**
 * The type of the action which signals to add a new chat message.
 *
 * {
 *     type: ADD_MESSAGE,
 *     displayName: string
 *     hasRead: boolean,
 *     id: string,
 *     messageType: string,
 *     message: string,
 *     timestamp: string,
 * }
 */
export const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * The type of the action which signals to clear messages in Redux.
 *
 * {
 *     type: CLEAR_MESSAGES
 * }
 */
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

/**
 * The type of the action which signals a send a chat message to everyone in the
 * conference.
 *
 * {
 *     type: SEND_MESSAGE,
 *     ignorePrivacy: boolean,
 *     filteredMessage: string
 * }
 */
export const SEND_MESSAGE = 'SEND_MESSAGE';

/**
 * The type of action which signals the initiation of sending of as private message to the
 * supplied recipient.
 *
 * {
 *     participant: Participant,
 *     type: SET_PRIVATE_MESSAGE_RECIPIENT
 * }
 */
export const SET_PRIVATE_MESSAGE_RECIPIENT = 'SET_PRIVATE_MESSAGE_RECIPIENT';

/**
 * The type of the action which signals to toggle the display of the chat panel.
 *
 * {
 *     type: TOGGLE_CHAT
 * }
 */
export const TOGGLE_CHAT = 'TOGGLE_CHAT';


/**
 * The type of the action which signals to toggle the censor feature.
 *
 * {
 *      type: TOGGLE_CENSOR
 * }
 */
export const TOGGLE_CENSOR = 'TOGGLE_CENSOR';


/**
 * The type of the action which signals new words to be added to the censor library.
 *
 * {
 *      type: CENSOR_UPDATE
 * }
 */
export const CENSOR_UPDATE = 'CENSOR_UPDATE';

/**
 * The type of the action that reset the censor filter's words that were added by the moderator.
 *
 * {
 *      type: RESET_FILTER
 * }
 */
export const RESET_FILTER = 'RESET_FILTER';
