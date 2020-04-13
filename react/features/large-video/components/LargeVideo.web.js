// @flow

import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as d3 from 'd3'

import { Watermarks } from '../../base/react';
import { Captions } from '../../subtitles/';
import { connect } from '../../base/redux';
import { makeACircle, makeSomeText, makeARect, makeALine } from './makeD3Things';

let appNode;


declare var interfaceConfig: Object;

type Props = {

    /**
     * Used to determine the value of the autoplay attribute of the underlying
     * video element.
     */
    _noAutoPlayVideo: boolean
}

/**
 * Implements a React {@link Component} which represents the large video (a.k.a.
 * the conference participant who is on the local stage) on Web/React.
 *
 * @extends Component
 */
class LargeVideo extends Component<Props> {
    
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {React$Element}
     */
    render() {
        return (
            <div
                className = 'videocontainerdifferentclass'
                id = 'largeVideoContainer'>
                <div id = 'sharedVideo'>
                    <div id = 'sharedVideoIFrame' />
                </div>
                <div id = 'etherpad' />

                <svg id = 'adPlaceHolder' width={screen.width} height={screen.height}>
                    <circle id = 'adPlaceHolderItem' cx="0" cy="0" r={screen.width * 2} fill="purple" opacity="1.0"/>
                </svg>

                {/* <div id='layertesting'> layer testing</ div> */}
                

                <Watermarks />
                
                {addText()}

                <div id = 'dominantSpeaker'>
                    <div className = 'dynamic-shadow' />
                    <div id = 'dominantSpeakerAvatarContainer' />
                </div>
                <div id = 'remotePresenceMessage' />
                <span id = 'remoteConnectionMessage' />
                <div id = 'largeVideoElementsContainer'>
                    <div id = 'largeVideoBackgroundContainer' />

                    {/*
                      * FIXME: the architecture of elements related to the large
                      * video and the naming. The background is not part of
                      * largeVideoWrapper because we are controlling the size of
                      * the video through largeVideoWrapper. That's why we need
                      * another container for the background and the
                      * largeVideoWrapper in order to hide/show them.
                      */}
                    <div id = 'largeVideoWrapper'>
                        <video
                            autoPlay = { !this.props._noAutoPlayVideo }
                            id = 'largeVideo'
                            muted = { true } />
                    </div>
                </div>
                {/* <svg width="900" height="9000">
                    <circle cx="25" cy="25" r="900" fill="purple" opacity="1.0"/>
                </svg> */}
                {createAd()}
                {/* <div id = 'adTest'></ div> */}
                {/* {timeAd()} */}
                { interfaceConfig.DISABLE_TRANSCRIPTION_SUBTITLES
                    || <Captions /> }
            </div>
        );
    }
}

function timeAd(){
    setTimeout(() => {
        document.getElementById('adTest').innerHTML = '';
    }, 3000);
}

function addText(){
    setTimeout(() => {
    document.getElementById('susolosusia').style.zIndex = "12"
    }, 3000);
}

function createAd(){
    // node = this.node;
    setTimeout(() => {
        document.getElementById('adPlaceHolder').remove();
    }, 7000);
    //     .attr('cx', 30)
    //     .attr('cy', 30)
    //     .attr('r', 20);
    // makeARect(appNode, '#000000', 100, 100, 500, 300, 1.0, 'adRect', 'adRectClass', '1', '1', '', '', '');
}


/**
 * Maps (parts of) the Redux state to the associated LargeVideo props.
 *
 * @param {Object} state - The Redux state.
 * @private
 * @returns {{
 *     _noAutoPlayVideo: boolean
 * }}
 */
function _mapStateToProps(state) {
    const testingConfig = state['features/base/config'].testing;

    return {
        _noAutoPlayVideo: testingConfig?.noAutoPlayVideo
    };
}


export default connect(_mapStateToProps)(LargeVideo);
