export const initWebflow = () => {

  const pageId = '64217a46f171f96acc4bd03b'; // may need to query data.next.html for data-wf-page attribute
  document.documentElement.setAttribute('data-wf-page', pageId);

  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require( 'ix2' ).init();
  document.dispatchEvent( new Event( 'readystatechange' ) );
 
}

