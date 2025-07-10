import { act, renderHook } from '@testing-library/react';
import useBoolean from '../useBoolean';

describe('useBoolean', () => {
  it('debería inicializarse con el estado predeterminado false', () => {
    const { result } = renderHook(() => useBoolean());
    expect(result.current[0]).toBe(false);
  });

  it('debería inicializarse con true si el estado inicial es true', () => {
    const { result } = renderHook(() => useBoolean(true));
    expect(result.current[0]).toBe(true);
  });

  it('debería establecerse a true cuando se llama a on', () => {
    const { result } = renderHook(() => useBoolean());
    act(() => {
      result.current[1].on();
    });
    expect(result.current[0]).toBe(true);
  });

  it('debería establecerse a false cuando se llama a off', () => {
    const { result } = renderHook(() => useBoolean(true));
    act(() => {
      result.current[1].off();
    });
    expect(result.current[0]).toBe(false);
  });

  it('debería alternar el valor cuando se llama a toggle', () => {
    const { result } = renderHook(() => useBoolean());
    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(false);
  });
});
