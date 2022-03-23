class ProjectInput {

    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLFormElement

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement; //all good, we will get access to that element with that id, will not be null and will be of this type
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateElement.content, true) //html code between template tags
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.attach()
    }
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const prjInput = new ProjectInput()