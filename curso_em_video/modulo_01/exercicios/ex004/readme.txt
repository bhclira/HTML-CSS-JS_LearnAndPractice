Capítulo 6 Aula 05 - Ícones e Favicon

* Conceito: Favicon = Ícone de favoritos: o Ícone que fica na aba do navegador

1. Crie um arquivo HTML da pasta <ex004>
	* Adicione na pasta <imagens> o arquivo <.ico>
	* Geralmente arquivos .ICO são utilizados para essa funcionalidade
	* Arquivos desse tipo podem ser carregados diretamente do projeto
	* Ou nos sites <iconarchive.com>, escolha um arquivo e baixe
		* Coloque o arquivo na sua pasta imagens

	* Também pode ser desenhado no site <favicon.cc>
		* Para ícones inéditos
		* Requer dons artísticos
	
	* No site <favicon.io> 
		* Arraste imagens ou textos
		* Gere um ícone, escolha a extensão

2. Usando as linhas de código:
	* Fazer alteração na sua tag <head> e adicionar uma tag <link>
	* Especifique em seguida o caminho do ícone salvo no projeto:
    	* <link rel="shortcut icon" href="arquivo.ico" type="image/x-icon">
    	* Ao digitar <link:favicon> o vsCode pedirá dois argumentos:
        	1. href="caminho-do-arquivo"
        	2. type="tipo-do-arquivo" (image/x-icon)