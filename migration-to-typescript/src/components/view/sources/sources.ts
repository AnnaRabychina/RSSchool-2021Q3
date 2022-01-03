import './sources.css';
import { ISource } from '../../controller/options';

class Sources {
    draw(data:Array<ISource>): void {
        const fragment = <DocumentFragment> document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement> document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement> sourceItemTemp.content.cloneNode(true);
            console.log(item);

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
