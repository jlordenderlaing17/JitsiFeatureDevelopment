// @flow

import {
    ADD_MESSAGE,
    CLEAR_MESSAGES,
    SEND_MESSAGE,
    SET_PRIVATE_MESSAGE_RECIPIENT,
    TOGGLE_CHAT,
    TOGGLE_CENSOR,
    CENSOR_UPDATE,
    RESET_FILTER
} from './actionTypes';

/**
 * Adds a chat message to the collection of messages.
 *
 * @param {Object} messageDetails - The chat message to save.
 * @param {string} messageDetails.displayName - The displayName of the
 * participant that authored the message.
 * @param {boolean} messageDetails.hasRead - Whether or not to immediately mark
 * the message as read.
 * @param {string} messageDetails.message - The received message to display.
 * @param {string} messageDetails.messageType - The kind of message, such as
 * "error" or "local" or "remote".
 * @param {string} messageDetails.timestamp - A timestamp to display for when
 * the message was received.
 * @returns {{
 *     type: ADD_MESSAGE,
 *     displayName: string,
 *     hasRead: boolean,
 *     message: string,
 *     messageType: string,
 *     timestamp: string,
 * }}
 */
export function addMessage(messageDetails: Object) {
    return {
        type: ADD_MESSAGE,
        ...messageDetails
    };
}

/**
 * Clears the chat messages in Redux.
 *
 * @returns {{
 *     type: CLEAR_MESSAGES
 * }}
 */
export function clearMessages() {
    return {
        type: CLEAR_MESSAGES
    };
}

/**
 * Sends a chat message to everyone in the conference.
 *
 * @param {string} message - The chat message to send out.
 * @param {boolean} ignorePrivacy - True if the privacy notification should be ignored.
 * @returns {{
 *     type: SEND_MESSAGE,
 *     ignorePrivacy: boolean,
 *     message: string
 * }}
 */
export function sendMessage(message: string, ignorePrivacy: boolean = false) {
    // console.log(message);

    // code for the blurred out version:
    // const filter = new Filter({ placeHolder: '!' });
    // const filter = new Filter();

    // if (message) {
    //     if (message !== filter.clean(message)) {
    //         // message = '[Message contains inappropriate text]';
    //     }

    //     // code for blurred out version:
    //     // message = filter.clean(message);
    // }

    return {
        type: SEND_MESSAGE,
        ignorePrivacy,
        message
    };
}

/**
 * Initiates the sending of a private message to the supplied participant.
 *
 * @param {Participant} participant - The participant to set the recipient to.
 * @returns {{
 *     participant: Participant,
 *     type: SET_PRIVATE_MESSAGE_RECIPIENT
 * }}
 */
export function setPrivateMessageRecipient(participant: Object) {
    return {
        participant,
        type: SET_PRIVATE_MESSAGE_RECIPIENT
    };
}

/**
 * Toggles display of the chat side panel.
 *
 * @returns {{
 *     type: TOGGLE_CHAT
 * }}
 */
export function toggleChat() {
    return {
        type: TOGGLE_CHAT
    };
}

/**
 * Toggles the censor on the chat.
 *
 * @returns {{
 *     type: TOGGLE_CENSOR
 * }}
 */
export function toggleCensor() {
    return {
        type: TOGGLE_CENSOR
    };
}

/**
 * Updates words to add to the censor library.
 *
 * @param {string} newWord - The new word to be added to the censor library.
 * @returns {{
 *     type: CENSOR_UPDATE
 * }}
 */
export function addToCensorLibrary(newWord: string) {
    return {
        type: CENSOR_UPDATE,
        newWord
    };
}

/**
 * Resets the added words to the censor dictionary.
 *
 * @returns {{
 *     type: RESET_FILTER
 * }}
 */
export function resetCensor() {
    return {
        type: RESET_FILTER
    };
}
