.PHONY: g_all
.PHONY: moving_module
.PHONY: generate_module_files
.PHONY: remove_module

# generate all resource for a module using nest g cmd
# make g_all module=<module_name>
g_all: generate_module_files moving_module

generate_module_files:
	nest g module $(module)
	nest g controller $(module)
	nest g service $(module)
moving_module:
	mv -f ./src/$(module) ./src/modules/$(module)
remove_module:
	rm -rf ./src/modules/$(module)
