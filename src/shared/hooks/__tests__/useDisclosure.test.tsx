import { act, renderHook } from '@testing-library/react';
import useDisclosure from '../useDisclosure';

describe('useDisclosure', () => {
  it('debería inicializarse con el estado predeterminado', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it('debería inicializarse con true si el estado inicial es true', () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  it('debería abrirse cuando se llama a onOpen', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => {
      result.current.onOpen();
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('debería cerrarse cuando se llama a onClose', () => {
    const { result } = renderHook(() => useDisclosure(true));
    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('debería alternar el estado cuando se llama a onToggle', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
