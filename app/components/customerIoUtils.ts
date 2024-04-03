interface CustomerIoIdentify {
  email: string;
  id: string;
}

export const customerIoIdentify = ({ email, id }: CustomerIoIdentify) => {
  const _cio = (window as any)._cio || [];
  (window as any)._cio = _cio;
  _cio.id = "cio-tracker";
  console.log(_cio);

  _cio.identify({ id, email });
};

export const customerIoTrack = (eventData: { name: string; data: any }) => {
  const _cio = (window as any)._cio || [];
  (window as any)._cio = _cio;

  _cio.id = "cio-tracker";
  _cio.track(eventData.name, eventData.data);
};
