interface CustomerIoIdentify {
  email: string;
}

export const customerIoIdentify = ({ email }: CustomerIoIdentify) => {
  const _cio = (window as any)._cio || [];
  (window as any)._cio = _cio;

  _cio.identify({ email });
};

export const customerIoTrack = (eventData: { name: string; data: any }) => {
  const _cio = (window as any)._cio || [];
  (window as any)._cio = _cio;

  _cio.track(eventData.name, eventData.data);
};
