class Fila {
  private static instancia: Fila;
  private documentos: string[] = [];

  private constructor() {}

  public static getInstance(): Fila {
    if (!Fila.instancia) {
      Fila.instancia = new Fila();
    }
    return Fila.instancia;
  }

  public ImprimeDocumento(documento: string): void {
    console.log(`Imprimindo documento: ${documento}`);
  }

  public RemoveDocumento(): void {
    if (this.documentos.length > 0) {
      const documentoRemovido = this.documentos.shift();
      if (documentoRemovido) {
        console.log(`Documento removido: ${documentoRemovido}`);
      }
    } else {
      console.log("A fila está vazia.");
    }
  }

  public AdicionaDocumento(documento: string): void {
    this.documentos.push(documento);
    console.log(`Documento adicionado à fila: ${documento}`);
  }

  public ListarDocumentos(): void {
    console.log("Documentos na fila:");
    this.documentos.forEach((documento, index) => {
      console.log(`${index + 1}: ${documento}`);
    });
  }
}

const fila = Fila.getInstance();
fila.AdicionaDocumento("Documento 1");
fila.AdicionaDocumento("Documento 2");
fila.ListarDocumentos();
fila.ImprimeDocumento("Documento 1");
fila.RemoveDocumento();
fila.ListarDocumentos();

export default Fila;
