# spring boot返回文件流

```
@GetMapping(value = "/file/{fileName}")
public ResponseEntity<FileSystemResource> getFile(@PathVariable("fileName") String fileName) throws FileNotFoundException {
	File file = new File(filePath, fileName);
	if (file.exists()) {
		return export(file);
	}
	System.out.println(file);
	return null;
}


public ResponseEntity<FileSystemResource> export(File file) {
	if (file == null) {
		return null;
	}
	HttpHeaders headers = new HttpHeaders();
	headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
	headers.add("Content-Disposition", "attachment; filename=" + file.getName());
	headers.add("Pragma", "no-cache");
	headers.add("Expires", "0");
	headers.add("Last-Modified", new Date().toString());
	headers.add("ETag", String.valueOf(System.currentTimeMillis()));
	return ResponseEntity.ok().headers(headers).contentLength(file.length()).contentType(MediaType.parseMediaType("application/octet-stream")).body(new FileSystemResource(file));
}

```