import rock_x8_bin from './rock-x8.bin?url';

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
			"name": "rock.009",
			"rotation": [
				-0.7392256259918213,
				-0.07638338953256607,
				-0.0023412401787936687,
				0.6691080331802368
			],
			"translation": [
				1.3130637407302856,
				0.20646114647388458,
				-1.4375534057617188
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
			"name": "rock.009",
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
			"count": 182,
			"max": [
				0.460356205701828,
				0.540854275226593,
				0.40496742725372314
			],
			"min": [
				-0.38810259103775024,
				-0.63530433177948,
				-0.25872641801834106
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 182,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 182,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 528,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1938,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1940,
			"uri": rock_x8_bin
		}
	]
}