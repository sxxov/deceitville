import rock_x10_bin from './rock-x10.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.011",
			"rotation": [
				-0.04088381305336952,
				-0.10550738126039505,
				-0.7802696824073792,
				0.6151227951049805
			],
			"translation": [
				-0.8410974740982056,
				0.17730368673801422,
				-2.998457908630371
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.011",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 428,
			"max": [
				0.31469041109085083,
				0.44851231575012207,
				0.37196084856987
			],
			"min": [
				-0.3953377902507782,
				-0.836301863193512,
				-0.3110416829586029
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 428,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 428,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 1152,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 4246,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 4248,
			"uri": rock_x10_bin
		}
	]
}