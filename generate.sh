protoc -I=. fourtyk.proto --js_out=import_style=commonjs,binary:src/app --grpc-web_out=import_style=typescript,mode=grpcweb:src/app
