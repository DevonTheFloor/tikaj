import { dQSr } from "../helpers/myDomHelper";

/**
 * open custom modal
 * @param {string} idParent - ID of the parent xhere the modal will mounted
 * @param {string} queryChidren - the query HTML of the children to created
 */
export function openModal(idParent, queryChidren) {
	const parent = document.getElementById(idParent),
	 child = document.createElement(queryChidren);
	parent.appendChild(child)
}


/**
 * Close the modal
 * @param {string} idParent - the ID of the parent tag
 * @param {string} queryChidren - the query HTML seletor of the child to remove
 */
export function closeModal(idParent, queryChidren) {
  const app = document.getElementById(idParent),
	  box = document.querySelector(queryChidren);
	app.removeChild(box);
}

/**
 * Cose every modals if another is open
 * @param {Array} modals - Array of modal's tag 
 * @param {string} idParent - Id of the parent
 */
export function onlyOneModalOpen (modals, idParent) {
	let parent = document.getElementById(idParent);
	// Vérifier que l'élément parent existe avant de continuer
	if (!parent) {
		console.error(`Parent with id "${idParent}" not found`);
		return;
	}
	  modals.forEach(modal => {
			let child = document.querySelector(modal);
			if(child) {
				parent.removeChild(child);
			}
		})
}