import { renderHook, act } from '@testing-library/react';
import useFileHandler from '../useFileHandler';

describe('useFileHandler', () => {
  it('debe inicializar con una lista de archivos vacía', () => {
    const { result } = renderHook(() => useFileHandler());
    expect(result.current.files).toEqual([]);
  });

  it('debe abrir el diálogo de selección de archivos y actualizar la lista de archivos seleccionados', () => {
    const { result } = renderHook(() => useFileHandler({ accept: '.txt', multiple: true }));

    act(() => {
      const input = document.createElement('input');
      const files = [new File(['contenido'], 'archivo1.txt', { type: 'text/plain' })];
      Object.defineProperty(input, 'files', { value: files });
      vi.spyOn(document, 'createElement').mockReturnValueOnce(input);
      result.current.openFileDialog();
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    expect(result.current.files).toHaveLength(1);
    expect(result.current.files[0].name).toBe('archivo1.txt');
  });

  it('debe eliminar un archivo de la lista por índice', () => {
    const { result } = renderHook(() => useFileHandler());

    act(() => {
      result.current.setFiles([new File(['contenido'], 'archivo1.txt', { type: 'text/plain' })]);
      result.current.removeFile(0);
    });

    expect(result.current.files).toHaveLength(0);
  });

  it('debe limpiar la lista de archivos', () => {
    const { result } = renderHook(() => useFileHandler());

    act(() => {
      result.current.setFiles([new File(['contenido'], 'archivo1.txt', { type: 'text/plain' })]);
      result.current.clearFiles();
    });

    expect(result.current.files).toEqual([]);
  });
});
