import { MemoryRouter, useSearchParams } from 'react-router-dom';
import {
  describe, it, expect, beforeEach, vi,
} from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useQueryParams from '../useQueryParams';

vi.mock('react-router-dom', () => {
  const actual = vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: vi.fn(),
    MemoryRouter: actual.MemoryRouter,
  };
});

describe('useQueryParams', () => {
  let mockSearchParams;
  let mockSetSearchParams;

  beforeEach(() => {
    mockSearchParams = new URLSearchParams();
    mockSetSearchParams = vi.fn();
    useSearchParams.mockReturnValue([mockSearchParams, mockSetSearchParams]);
  });

  it('debe establecer parámetros por defecto si no están presentes', () => {
    renderHook(() => useQueryParams({ foo: 'bar' }), { wrapper: MemoryRouter });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ foo: 'bar' }, { replace: true });
  });

  it('debe fusionar parámetros existentes con valores por defecto', () => {
    mockSearchParams.set('baz', 'qux');

    renderHook(() => useQueryParams({ foo: 'bar' }), { wrapper: MemoryRouter });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ foo: 'bar', baz: 'qux' }, { replace: true });
  });

  it('debe actualizar parámetros cuando se llama setParams', () => {
    const { result } = renderHook(() => useQueryParams({ foo: 'bar' }), { wrapper: MemoryRouter });

    act(() => {
      result.current[1]({ baz: 'qux' });
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ foo: 'bar', baz: 'qux' }, { replace: true });
  });

  it('debe eliminar parámetros con valores null o undefined', () => {
    const { result } = renderHook(() => useQueryParams({ foo: 'bar' }), { wrapper: MemoryRouter });

    act(() => {
      result.current[1]({ baz: 'qux', foo: null });
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith({ baz: 'qux' }, { replace: true });
  });

  it('debe retornar los parámetros actuales con valores por defecto', () => {
    mockSearchParams.set('baz', 'qux');

    const { result } = renderHook(() => useQueryParams({ foo: 'bar' }), { wrapper: MemoryRouter });

    expect(result.current[0]).toEqual({ foo: 'bar', baz: 'qux' });
  });
});
