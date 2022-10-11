import { Clock } from 'three';
import { Base } from './class/base';
class Main extends Base {
    private wrapper: Element = document.querySelector('#wrapper');
    private chatBlock: Element = document.querySelector('#chat-block');
    private chatBlockActive = false;
    constructor(canvas: HTMLCanvasElement, domCanvas: HTMLElement, domBundle: HTMLElement) {
        super(canvas, domCanvas, domBundle);
        this.initChatUI();
    }
    initChatUI() {
        const toggler = this.chatBlock.querySelector('#chat-block-toggler');
        const rotationLock = this.chatBlock.querySelector('#rotation-lock');
        toggler.addEventListener('click', () => {
            if (this.chatBlockActive) {
                this.wrapper.classList.remove('wrapper--active');
            }
            else {
                this.wrapper.classList.add('wrapper--active');
            }
            this.chatBlockActive = !this.chatBlockActive;
        })

        rotationLock.addEventListener('click', () => {
            const status = this.getRotationLockStatus();
            if (status) {
                rotationLock.classList.remove('chat-block__rotation-lock--active');
            }
            else {
                rotationLock.classList.add('chat-block__rotation-lock--active');
            }

            this.toggleRotationLock(!status)

        })

    }
}


(() => {
    const cvs = document.querySelector('#canvas');
    const dcvs = document.querySelector('#dom-canvas');
    const domBundle = document.querySelector('#dom-bundle');
    const instance = new Main(cvs as HTMLCanvasElement, dcvs as HTMLElement, domBundle as HTMLElement);
})()