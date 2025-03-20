export default class AveniosItemSheet extends ItemSheet {
    get template(){
        return `systems/avenios/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}